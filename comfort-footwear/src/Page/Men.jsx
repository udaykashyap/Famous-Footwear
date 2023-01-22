import React, { useEffect } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import ShopBootSaleCard from "../Components/ShopBootSaleCard";

// ..............................................................

import {
  Heading,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const Men = () => {
  const [data, setData] = React.useState([]);
  // const [page, setPage] = React.useState(1);

  const getdata = async () => {
    const response = await fetch(`http://localhost:8080/mens`);
    const res = await response.json();
    setData(res);
  };

  useEffect(() => {
    getdata();
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
          <Text fontWeight={500}>Sign In / Join Now</Text>
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
      <Box
        width={{ base: "100%", md: "80%" }}
        border="0px solid red"
        display={"flex"}
        margin="auto"
      >
        <Box
          width={{ base: "0", md: "20%" }}
          // border="0px solid green"
          display={{ base: "none", md: "flex" }}
        >
          Sidebar
        </Box>
        <Box
          width={{ base: "100%", md: "80%" }}
          // borderLeft="1px solid black"
          padding={"20px"}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
          >
            {data.map((el) => (
              <Box key={el.id}>
                <RouterLink to={`/men/${el.id}`}>
                  <ShopBootSaleCard
                    isNew={true}
                    name={el.brand}
                    imageURL={el.image}
                    price={el.price}
                    rating={el.rating}
                    numReviews={"37"}
                    details={el.desc}
                    sale={"Sale"}
                  />
                </RouterLink>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* ..............................................Paginatino................................................ */}
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent="space-evenly"
        margin={"auto"}
        width="20%"
      >
        <Button
          borderRadius={"0px"}
          border="1px solid black"
          _hover={{ color: "white", bgColor: "black" }}
        >
          1
        </Button>
        <Button
          borderRadius={"0px"}
          border="1px solid black"
          _hover={{ color: "white", bgColor: "black" }}
        >
          2
        </Button>
        <Button
          borderRadius={"0px"}
          border="1px solid black"
          _hover={{ color: "white", bgColor: "black" }}
        >
          3
        </Button>
        <Button
          borderRadius={"0px"}
          border="1px solid black"
          _hover={{ bgColor: "black" }}
        >
          4
        </Button>
        <Button
          borderRadius={"0px"}
          bgColor="black"
          color={"white"}
          _hover={{
            bgColor: "gray.200",
            color: "black",
          }}
        >
          Next
        </Button>
      </Box>
      {/* ....................................................Product end here.................................................. */}
      <>
        <Box>
          <Heading
            margin={"auto"}
            marginTop="4%"
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="16px"
            borderBottom={"3px solid black"}
            paddingBottom="5px"
            width="200px"
            mb={"3%"}
          >
            GET MORE FRESH INSPO
          </Heading>

          <hr style={{ width: "80%", margin: "auto" }} />
          <br />
          <br />
          <Heading
            margin={"auto"}
            marginTop="2%"
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="22px"
            //   borderBottom={"3px solid black"}
            paddingBottom="5px"
            width="280px"
            mb={"3%"}
          >
            Shop for:
          </Heading>
          <Box
            width={"20%"}
            margin="auto"
            // border={"1px solid red"}
            display="flex"
            justifyContent={"space-evenly"}
          >
            <Text borderBottom={"3px solid black"}>
              <RouterLink>WOMEN</RouterLink>
            </Text>
            <Text borderBottom={"3px solid black"}>
              <RouterLink>MEN</RouterLink>
            </Text>
            <Text borderBottom={"3px solid black"}>
              <RouterLink>KIDS</RouterLink>
            </Text>
            <Text borderBottom={"3px solid black"}>
              <RouterLink>SALES</RouterLink>
            </Text>
          </Box>
          <br />
          <br />

          <Box color={"#333f48"}>
            <Heading
              margin={"auto"}
              marginTop="2%"
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="22px"
              //   borderBottom={"3px solid black"}
              paddingBottom="5px"
              mb={"3%"}
            >
              Find Your Next Pair of Shoes at Comfort Footwear
            </Heading>

            <InputGroup width={{ base: "100%", md: "30%" }} margin="auto">
              <Input
                borderRadius={"0px"}
                border="2px solid #333f48"
                placeholder="Email"
              />
              <InputRightElement width={"70px"}>
                <Button bgColor="#333f48" color="white" borderRadius={"0px"}>
                  SignUp
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
        <br />
        <br />
        <hr />
      </>
      <Box
        display={{ base: "grid", xl: "flex" }}
        width={{ base: "100%", xl: "80%" }}
        margin="auto"
        padding="20px"
        fontSize={{ base: "12px", md: "14px" }}
      >
        <Box
          display={"flex"}
          height="100px"
          justifyContent="center"
          alignItems="center"
          borderRight={{ base: "none", md: "1px solid #333f48" }}
          padding="10px"
        >
          <Image
            width={{ base: "30px", xl: "50px" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/rewards-images/rewards-refresh-2022/secondary-footer/free_shipping.svg"
            alt="#"
          />
          <Box>
            <Text>Free Shipping for Members</Text>
            <Text>Plus, return your purchase to any store, at any time.</Text>
          </Box>
        </Box>
        <hr />
        <Box
          display={"flex"}
          height="100px"
          justifyContent="center"
          alignItems="center"
          borderRight={{ base: "none", md: "1px solid #333f48" }}
          padding="10px"
        >
          <Image
            width={{ base: "30px", xl: "50px" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/footer/gift-card.svg"
            alt="#"
          />
          <Box>
            <Text>Free Shipping for Members</Text>
            <Text>Plus, return your purchase to any store, at any time.</Text>
          </Box>
        </Box>
        <hr />
        <Box
          display={"flex"}
          height="100px"
          justifyContent="center"
          alignItems="center"
          borderRight={{ base: "none", md: "1px solid #333f48" }}
          padding="10px"
        >
          <Image
            width={{ base: "30px", xl: "50px" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/footer/ff-pickup.svg"
            alt="#"
          />
          <Box>
            <Text>Free Shipping for Members</Text>
            <Text>Plus, return your purchase to any store, at any time.</Text>
          </Box>
        </Box>
        <hr />

        <Box
          display={"flex"}
          height="100px"
          justifyContent="center"
          alignItems="center"
          padding="10px"
        >
          <Image
            width={{ base: "30px", xl: "50px" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/footer/zip.svg"
            alt="#"
          />
          <Box>
            <Text>Free Shipping for Members</Text>
            <Text>Plus, return your purchase to any store, at any time.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Men;
