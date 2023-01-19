import { Box, Heading, Text, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import React from "react";

const Footer = () => {
  return (
    <Box
      borderTop={"4px solid #d50032"}
      color="gray.700"
      bgColor="#f0f0f0"
      height={{ base: "100%", md: "700px" }}
      //   border="1px solid green"
    >
      {/*////////////////////////////////////////////////////// Social Media ////////////////////////////////////////////////////////*/}

      <Box
        display={{ base: "grid", md: "flex" }}
        gap={"20px"}
        justifyContent={"center"}
        marginTop={"40px"}
      >
        <Box>
          <Text>CONNECT WITH US</Text>
        </Box>
        <Box
          display="flex"
          gap={"20px"}
          marginTop={{ base: "-10px", xl: "0px" }}
          border="0px solid red"
          justifyContent={"space-around"}
        >
          <Text _hover={{ color: "#d50032" }}>
            <i class="fa-brands fa-facebook"></i>
          </Text>
          <Text _hover={{ color: "#d50032" }}>
            <i class="fa-brands fa-pinterest"></i>
          </Text>
          <Text _hover={{ color: "#d50032" }}>
            <i class="fa-brands fa-instagram"></i>
          </Text>
          <Text _hover={{ color: "#d50032" }}>
            <i class="fa-brands fa-youtube"></i>
          </Text>
          <Text _hover={{ color: "#d50032" }}>
            <i class="fa-solid fa-truck-fast"></i>
          </Text>
        </Box>
      </Box>

      {/*////////////////////////////////////////////////////// Social Media end ////////////////////////////////////////////////////////*/}

      {/*////////////////////////////////////////////////////// Footer Head ////////////////////////////////////////////////////////*/}

      <Box
        width={{ base: "100%", md: "80%" }}
        // border="1px solid green"
        margin={"auto"}
        // padding="20px"
        display={{ base: "grid", md: "flex" }}
        height={{ base: "auto", md: "60%" }}
      >
        <Box
          display={{ base: "grid", md: "flex" }}
          gridTemplateColumns="repeat(2,1fr)"
          gridTemplateRows={"repeat(2,1fr)"}
          //   border="0px solid red"
          width={{ base: "100%", md: "60%" }}
          height={{ base: "auto", md: "100%" }}
          justifyContent="space-around"
          textAlign={"center"}
          padding={{ base: "0px", md: "30px" }}
          marginTop={"30px"}
          gap="20px"
        >
          <Box border="0px solid blue" height={"-webkit-fit-content"}>
            <Text fontSize={"16px"} marginBottom="5px">
              STORES
            </Text>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Famously Fast</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Find A Store</Link>
            </Heading>
          </Box>
          <Box border="0px solid blue" height={"-webkit-fit-content"}>
            <Text fontSize={"16px"} marginBottom="5px">
              FAMOUSLY YOU
            </Text>

            <Link>
              <Heading fontSize={"14px"} fontWeight={"500"}>
                Sign In / Join Now
              </Heading>
            </Link>

            <Link>
              <Heading fontSize={"14px"} fontWeight={"500"}>
                Learn More
              </Heading>
            </Link>
            <Link>
              <Heading fontSize={"14px"} fontWeight={"500"}>
                Credit Card
              </Heading>
            </Link>
            <Link>
              <Heading fontSize={"14px"} fontWeight={"500"}>
                Mobile App
              </Heading>
            </Link>
            <Link>
              <Heading fontSize={"14px"} fontWeight={"500"}>
                Rewards Terms
              </Heading>
            </Link>
          </Box>
          <Box
            border="0px solid blue"
            height={"-webkit-fit-content"}
            marginTop={{ base: "-40px", xl: "0px" }}
          >
            <Text fontSize={"16px"} marginBottom="5px">
              HELP
            </Text>

            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>FAQ / Contact Us</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Shipping & Returns</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Exclusions</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Track My Order</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Gift Cards</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Shoe Size Charts</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Zip</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Unsubscribe</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Accessibility</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Do NotShare My</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Personal Information</Link>
            </Heading>
          </Box>

          <Box border="0px solid blue" height={"-webkit-fit-content"}>
            <Text fontSize={"16px"} marginBottom="5px">
              ABOUT US
            </Text>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>About Us</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Careers</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Ticket to Dream</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Site Map</Link>
            </Heading>
            <Heading fontSize={"14px"} fontWeight={"500"}>
              <Link>Eco-Conscious</Link>
            </Heading>
          </Box>
        </Box>
        <br />
        <br />
        <Box
          //   border="0px solid blue"
          width={{ base: "100%", xl: "30%" }}
          height={{ base: "100%", xl: "50%" }}
          margin="auto"
          marginTop={{ base: "5%" }}
        >
          <Box display={"flex"} justifyContent="space-evenly">
            <Image
              width={{ base: "25%", md: "30%" }}
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/rewards-images/plcc-double.png?w=+1440&hash=68621878391AE4CD59361AC547BEFA9F"
              alt="#"
            />
            <Box marginTop={"15%"}>
              <Text fontSize={"14px"} fontWeight={"500"}>
                FAMOUSLY YOU REWARDS®
              </Text>
              <Text fontWeight={"300"}>Credit Card</Text>
            </Box>
          </Box>
          <Box
            fontSize={"14px"}
            fontWeight={"500"}
            display={"flex"}
            marginTop={"5%"}
            justifyContent="space-around"
          >
            <Link>Learn More & Apply</Link>
            <Link>Manage Card</Link>
          </Box>

          <br />
          <Box
            display={"flex"}
            justifyContent="space-evenly"
            fontSize={"13px"}
            fontWeight={"500"}
          >
            <Link>Privacy Policy </Link>|<Link> Terms & Conditions </Link>|
            <Link> Supply Chain Act</Link>
          </Box>

          <br />
          <Box fontSize={"12px"}>
            <Text>© 2023 Caleres, Inc.</Text>
          </Box>

          <Box margin={"auto"} w={"50%"} marginTop="20px">
            <Image
              w={"30%"}
              margin={"auto"}
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-assets/accessibility-icon.svg"
              alt="#"
            />
          </Box>
        </Box>
      </Box>

      {/*//////////////////////////////////////////////////////Footer Head end  ////////////////////////////////////////////////////////*/}

      <br />
      <Box
        width={{ base: "100%", xl: "80%" }}
        fontWeight={"300"}
        margin="auto"
        fontSize={{ base: "10px", xl: "16px" }}
      >
        1Yes, I would like to receive emails with trends, updates & special
        offers a few times a week. By providing my information, I am certifying
        that I am at least 18 years old. Note: we collect and use the
        information you provide in accordance with our Privacy Policy.
      </Box>

      <br />
      <Box
        width={"100%"}
        fontWeight={"400"}
        textAlign={{ base: "center", xl: "right" }}
      >
        Created By Uday Kumar Kashyap fw21_0870 @Masai School
      </Box>
    </Box>
  );
};

export default Footer;
