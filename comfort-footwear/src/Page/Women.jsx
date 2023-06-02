import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";

// ..............................................................

import CardForWomen from "../Components/CardForWomen";

const Women = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);
  // console.log(cart.length);

  //getting add data from API
  const getdata = async () => {
    try {
      const response = await fetch(
        `https://mock-server-d4bb.onrender.com/woman?_page=${page}&_limit=20`
      );
      const res = await response.json();
      setData((prev) => [...prev, ...res]);
    } catch (error) {
      console.log(error);
    }
  };

  //handling scroll
  const handleScroll = async () => {
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.documentElement.scrollTop);
    // console.log(window.innerHeight);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 5 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //handle Search
  const handleSearch = async (e) => {
    let q = e.target.value;
    try {
      let response = await fetch(
        `https://mock-server-d4bb.onrender.com/woman?q=${q}`
      );
      let sdata = await response.json();
      console.log(sdata);
      setData(sdata);
    } catch (error) {
      console.log(error);
    }
  };
  // ..............................................................
  // handle Filter
  const handleCatagories = async (e) => {
    // setCatagory(e.target.value);
    try {
      const res = await fetch(
        `https://mock-server-d4bb.onrender.com/woman?catagories=${e.target.value}`
      );
      const dataa = await res.json();
      setData(dataa);
      console.log(dataa);
    } catch (error) {
      console.log(error);
    }
  };
  const handleColor = async (e) => {
    // setColor(e.target.value);
    try {
      const res = await fetch(
        `https://mock-server-d4bb.onrender.com/woman?color=${e.target.value}`
      );
      const dataa = await res.json();
      setData(dataa);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSize = async (e) => {
    // setSize(e.target.value);
    const res = await fetch(
      `https://mock-server-d4bb.onrender.com/woman?size=${e.target.value}`
    );
    const dataa = await res.json();
    setData(dataa);
  };
  // ..............................................................

  // ..............................................................
  //handle Cart
  const handleCart = (value) => {
    if (cart.length < 1) {
      alert("No Data Selected");
    } else {
      alert(cart.length + "data is added");
      console.log(cart);
    }
  };

  const handleCartData = (val) => {
    setCart([...cart, val]);
  };
  // ..............................................................
  // Rest Button
  const reset = () => {
    getdata();
  };

  useEffect(() => {
    getdata();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent="space-around"
        color={"#333f48"}
        alignItems="center"
        marginBottom={"1%"}
        padding={"0.5%"}
        fontSize={"14px"}
      >
        <Box>
          <Text>Find a Store</Text>
        </Box>
        <Box textAlign={"left"}>
          <Text>Free Shipping for Rewards or Orders $75+</Text>
          <Link to={"/login"}>
            {" "}
            <Text fontWeight={500}>Sign In / Join Now</Text>
          </Link>
        </Box>
      </Box>
      <Box
        width={"100%"}
        bgColor="#333f48"
        display={"flex"}
        justifyContent="space-around"
        color={"#fff"}
        alignItems="center"
        marginBottom={"2%"}
        height={"60px"}
        fontSize={"14px"}
      >
        <Text>Buy one, get one 50% Off Boots</Text>
        <Text>Exclusions apply.</Text>
      </Box>

      {/* filter is here */}
      <Box
        width={"80%"}
        margin={"auto"}
        display={"flex"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Text>Filter</Text>
        <Select
          placeholder="Catagories"
          onChange={(e) => {
            handleCatagories(e);
          }}
        >
          <option value="Boot">Boot</option>
          <option value="Shoe">Shoe</option>
          <option value="Sandle">Sandal</option>
        </Select>
        <Select
          placeholder="Color"
          onChange={(e) => {
            handleColor(e);
          }}
        >
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="blue">Blue</option>
        </Select>
        <Select
          placeholder="Size"
          onChange={(e) => {
            handleSize(e);
          }}
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </Select>
        <Button onClick={reset}>↻</Button>
        <Input
          border={"2px solid black"}
          borderRadius={"0px"}
          placeholder="Search Product"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
      </Box>
      <Box
        width={{ base: "100%", md: "80%" }}
        border="0px solid red"
        display={"flex"}
        margin="auto"
      >
        <Box border="0px solid black" padding={"20px"} margin={"auto"}>
          <Box>
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Review</Th>
                  <Th>Size</Th>
                  <Th>Color</Th>
                  <Th>Price</Th>
                  <Th>Buy</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((el) => (
                  <CardForWomen handleCartData={handleCartData} {...el} />
                ))}
              </Tbody>
            </Table>
          </Box>
          <Button
            onClick={handleCart}
            bgColor={"blue.500"}
            color={"white"}
            _hover={{ bgColor: "blue.500", color: "white" }}
          >
            Add Selected to Cart
          </Button>
          {/* <Box height="50px" margin={"8%"}>
            Thanks For Visit...
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Women;
