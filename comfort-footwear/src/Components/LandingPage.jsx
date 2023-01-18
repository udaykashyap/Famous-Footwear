import React from "react";
import Navbar from "./Navbar";
import { Box, Image, Link } from "@chakra-ui/react";
import { Flex, Spacer, Text, Heading } from "@chakra-ui/react";
import ShopBootSaleCard from "./ShopBootSaleCard";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <h1>This is home page</h1>
      <Box
        borderWidth="1px"
        borderRadius="0px"
        overflow="hidden"
        // border={"1px solid red"}
        width="60%"
        margin={"auto"}
        border="0px"
      >
        <Flex padding="30px" fontFamily="sans-serif" fontWeight="500">
          <Box width="32%" height="100px" p="4" color="white" bg="#333f48">
            Up to 60% off
            <br /> Women's Boot
            <br /> <Link>Shop Now</Link>
          </Box>
          <Spacer />
          <Box width="32%" height="100px" p="4" color="white" bg="#333f48">
            Select Women's Styles <br />
            Under 30$ <br />
            <Link>Shop Now</Link>
          </Box>
          <Spacer />
          <Box width="32%" height="100px" p="4" color="white" bg="#d50032">
            Exclusive App Deals
            <br /> for Rewards Members
            <br /> <Link>Learn More</Link>
          </Box>
        </Flex>
      </Box>
      <Box
        borderWidth="1px"
        borderRadius="0px"
        overflow="hidden"
        // border={"1px solid red"}
        width={{ base: "100%", md: "80%" }}
        margin={"auto"}
      >
        <Image
          height={{ base: "200px", md: "80%" }}
          src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/hero/wk49_010123_hp_hero_desktop_newarrivals.jpg"
          alt="Comfort"
        />
      </Box>
      <Box display={{ md: "none", xl: "none", "2xl": "none" }} marginTop="30px">
        <Heading lineHeight="50px" fontSize={"24px"}>
          New Year, New Shoes
        </Heading>
        <Text>
          See what just hit the site from your favorite comfort brand.
        </Text>
        <Link
          textDecoration={"underline"}
          fontSize="18px"
          fontWeight={1000}
          lineHeight="50px"
        >
          SHOP NEW ARRIAVALS
        </Link>
      </Box>
      <Heading
        marginTop="3%"
        fontFamily="sans-serif"
        fontWeight="600"
        fontSize="22px"
      >
        Shop By Catagory
      </Heading>

      {/* Cards for Home Page :- Shop By Catagory*/}

      <Box
        border={"0px solid red"}
        width="70%"
        margin={"auto"}
        p="10px"
        display={{ base: "gird", md: "flex" }}
        gridTemplateColumns="repeat(2, 1fr)" //{{ base: "repeat(2, 1fr)", md: "repeat(4,1fr)" }}
        gridTemplateRows="repeat(2, 1fr)" //{{ base: "repeat(2, 1fr)", md: "repeat(2,1fr)" }}
        gap={"10px"}
        justifyContent="space-around"
      >
        <Box width={{ base: "100%", md: "20%" }}>
          <img
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/categories/wk51_011523_categorybanner_1_winterboots.jpg"
            alt=""
          />
          <p>Snow & Winter Boots</p>
        </Box>
        <Box width={{ base: "100%", md: "20%" }}>
          <img
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/categories/wk50_010923_categorybanner_2_active.jpg"
            alt=""
          />
          <p>Running Shoe</p>
        </Box>
        <Box width={{ base: "100%", md: "20%" }}>
          <img
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/categories/wk50_010923_categorybanner_3_boots_new.jpg"
            alt=""
          />
          <p>Tall Boot</p>
        </Box>
        <Box width={{ base: "100%", md: "20%" }}>
          <img
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/categories/wk51_011523_categorybanner_4_slippers.jpg"
            alt=""
          />
          <p>Slippers</p>
        </Box>
      </Box>
      <br />
      <br />

      <Box
        width={{ base: "100%", md: "80%" }}
        bg={"#603447"}
        margin="auto"
        p={{ base: "5", md: "30" }}
        height={{ base: "200px", md: "auto" }}
        display={{ base: "grid", md: "flex" }}
      >
        <Image
          width={{ base: "400px", md: "50%" }}
          src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/promo/up_to_60_off_womens_boots_nopadding.png"
          alt="#"
        />
        <Text>
          <br />
          <br />

          <Link
            color={"white"}
            textDecoration="underline"
            marginLeft={{ base: "auto", md: "300px" }}
            fontWeight={700}
            fontSize={20}
          >
            SHOP NOW
          </Link>
        </Text>
      </Box>

      <br />
      <br />
      <br />
      <br />

      {/*Shop the Boot Sale*/}

      <Box>
        <Heading
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="22px"
          mb={"5%"}
        >
          Shop the Boot Sale
        </Heading>
        <Box
          display={{ base: "grid", md: "flex" }}
          //   border="1px solid red"
          width={{ md: "80%" }}
          margin="auto"
        >
          <ShopBootSaleCard
            isNew={true}
            name="Dr. Martin's"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/39/31/0/39310_pair_medium.jpg"
            price={"69.99"}
            rating={"4.5"}
            numReviews={"37"}
            details={"Women Zalava Combat boot"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Dr. Martin's"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/98/06/9/98069_pair_medium.jpg"
            price={"69.99"}
            rating={"4.5"}
            numReviews={"37"}
            details={"Women Zalava Combat boot"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Dr. Martin's"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/97/55/1/97551_pair_medium.jpg"
            price={"69.99"}
            rating={"4.5"}
            numReviews={"37"}
            details={"Women Zalava Combat boot"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Dr. Martin's"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/94/82/5/94825_pair_medium.jpg"
            price={"69.99"}
            rating={"4.5"}
            numReviews={"37"}
            details={"Women Zalava Combat boot"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Euro Soft"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/97/89/7/97897_pair_medium.jpg"
            price={"54.99"}
            rating={"2.5"}
            numReviews={"12"}
            details={"Women Ahead Combat Bootie"}
          />
        </Box>
      </Box>

      <br />
      <br />
      <div>
        <Box
          border={"0px solid black"}
          display={{ base: "grid", md: "flex" }}
          w={{ base: "100%", md: "50%" }}
          margin="auto"
          justifyContent={"space-around"}
        >
          <img
            style={{ borderRadius: "50%" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/price-bubbles/wk48_pricebubbles_performance.jpg?h=148&iar=0&w=150&hash=DE7D0EB08472865D432ADBEEFCBEAE84"
            alt="#"
          />
          <img
            style={{ borderRadius: "50%" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/price-bubbles/wk48_pricebubbles_nike.jpg?h=148&iar=0&w=150&hash=59E5593AD4402D0195C45F308E95FFA7"
            alt="#"
          />
          <img
            style={{ borderRadius: "50%" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/price-bubbles/wk48_pricebubbles_womens-boots.jpg?h=148&iar=0&w=150&hash=EC406ACA0256DB19D0BE7D1416C7C262"
            alt="#"
          />
          <img
            style={{ borderRadius: "50%" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/price-bubbles/wk48_pricebubbles_kids-clearance.jpg?h=148&iar=0&w=150&hash=9DDB7D9E793FD54571D34D22DEB82DA1"
            alt="#"
          />
        </Box>
      </div>
      <br />
      <br />
      <Box
        borderWidth="1px"
        borderRadius="0px"
        overflow="hidden"
        // border={"1px solid red"}
        width={{ base: "100%", md: "80%" }}
        margin={"auto"}
      >
        <Image
          height={{ base: "200px", md: "80%" }}
          src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/1-story/wk51_011523_1_story_single_courtsneakers.jpg"
          alt="Comfort"
        />
      </Box>
    </div>
  );
};

export default LandingPage;
