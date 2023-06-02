import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";

import { toast, ToastContainer } from "react-toastify";

const SinglePageMen = () => {
  const [data, setData] = useState([]);
  const getData = async (id) => {
    const res = await fetch(`https://mock-server-d4bb.onrender.com/mens/${id}`);
    const resData = await res.json();
    setData(resData);
  };
  const params = useParams();
  const handleCart = () => {
    console.log("added");
    toast.success("Added successful!");
  };

  useEffect(() => {
    getData(params.men_id);
  }, [params.men_id]);

  return (
    <Container maxW={"7xl"}>
     
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data.image}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.brand}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $ {data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {data.desc}
              </Text>
              {/* <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text> */}
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("#d52003", "#d52003")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Select Size
              </Text>

              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                border="1px solid gray"
                padding={"10px"}
                borderRadius={"md"}
              >
                <List spacing={2}>
                  <ListItem>
                    {" "}
                    <Box
                      border="1px solid gray"
                      width={{ base: "auto", xl: "10%" }}
                      margin="auto"
                      _hover={{
                        backgroundColor: "#d52003",
                        color: "white",
                        borderColor: "#d52003",
                      }}
                    >
                      5
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      border="1px solid gray"
                      width={{ base: "auto", xl: "10%" }}
                      margin="auto"
                      _hover={{
                        backgroundColor: "#d52003",
                        color: "white",
                        borderColor: "#d52003",
                      }}
                    >
                      6
                    </Box>{" "}
                  </ListItem>{" "}
                  <ListItem>
                    <Box
                      border="1px solid gray"
                      width={{ base: "auto", xl: "10%" }}
                      margin="auto"
                      _hover={{
                        backgroundColor: "#d52003",
                        color: "white",
                        borderColor: "#d52003",
                      }}
                    >
                      7
                    </Box>
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                    <Box
                      border="1px solid gray"
                      width={{ base: "auto", xl: "10%" }}
                      margin="auto"
                      _hover={{
                        backgroundColor: "#d52003",
                        color: "white",
                        borderColor: "#d52003",
                      }}
                    >
                      5.5
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      border="1px solid gray"
                      width={{ base: "auto", xl: "10%" }}
                      margin="auto"
                      _hover={{
                        backgroundColor: "#d52003",
                        color: "white",
                        borderColor: "#d52003",
                      }}
                    >
                      6.5
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      border="1px solid gray"
                      width={{ base: "auto", xl: "10%" }}
                      margin="auto"
                      _hover={{
                        backgroundColor: "#d52003",
                        color: "white",
                        borderColor: "#d52003",
                      }}
                    >
                      8
                    </Box>
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("#d52003")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text fontSize={"lg"}>{data.desc}</Text>
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("#d52003")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => {
              handleCart();
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
        
      </SimpleGrid>
    </Container>
  );
};

export default SinglePageMen;
