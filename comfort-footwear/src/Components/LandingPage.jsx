import React from "react";

import { Box, Button, Image, Link } from "@chakra-ui/react";
import {
  Spacer,
  Text,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import ShopBootSaleCard from "./ShopBootSaleCard";
import REWARDS from "./REWARDS.png";
import { Link as RouterLink } from "react-router-dom";
import Footer from "./Footer";

const brandImges = [
  "https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/tests/hp-bts-redesign/brands/hp_logo_nike.png",
  "https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/tests/hp-bts-redesign/brands/hp_logo_converse.png",
  "https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/fall/logos/hp_logo_heydude.png",
  "https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/fall/logos/hp_logo_bearpawupdate.png",
  "https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/fall/logos/hp_logo_drmartens.png",
  "https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/fall/logos/hp_logo_timberland.png",
];

const LandingPage = () => {
  return (
    <div color="gray">
      {/* <Navbar /> */}

      <Box
        borderWidth="1px"
        borderRadius="0px"
        overflow="hidden"
        // border={"1px solid red"}
        width={{ base: "100%", xl: "60%" }}
        margin={"auto"}
        border="0px"
        display={{ base: "grid", xl: "flex" }}
      >
        <Box
          display={{ base: "grid", xl: "flex" }}
          padding="30px"
          width="100%"
          fontFamily="sans-serif"
          fontWeight="500"
          // border={"1px solid blue"}
          gap="10px"
        >
          <Box
            width={{ base: "100%", xl: "32%" }}
            height="100px"
            p="4"
            color="white"
            bg="#333f48"
          >
            Up to 60% off
            <br /> Women's Boot
            <br /> <Link>Shop Now</Link>
          </Box>
          <Spacer />
          <Box
            width={{ base: "100%", xl: "32%" }}
            height="100px"
            p="4"
            color="white"
            bg="#333f48"
          >
            Select Women's Styles <br />
            Under 30$ <br />
            <Link>Shop Now</Link>
          </Box>
          <Spacer />
          <Box
            width={{ base: "100%", xl: "32%" }}
            height="100px"
            p="4"
            color="white"
            bg="#d50032"
          >
            Exclusive App Deals
            <br /> for Rewards Members
            <br /> <Link>Learn More</Link>
          </Box>
        </Box>
      </Box>
      <Box
        borderWidth="1px"
        borderRadius="0px"
        overflow="hidden"
        // border={"1px solid red"}
        width={{ base: "100%", md: "80%" }}
        margin={"auto"}
      >
        <Link to="/">
          <Image
            height={{ base: "200px", md: "80%" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/hero/wk49_010123_hp_hero_desktop_newarrivals.jpg"
            alt="Comfort"
          />
        </Link>
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
        margin={"auto"}
        marginTop="3%"
        fontFamily="sans-serif"
        fontWeight="600"
        fontSize="22px"
        borderBottom={"3px solid black"}
        paddingBottom="5px"
        width="200px"
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
          margin={"auto"}
          marginTop="2%"
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="22px"
          borderBottom={"3px solid black"}
          paddingBottom="5px"
          width="230px"
          mb={"3%"}
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
            sale={"Sale"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Dr. Martin's"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/98/06/9/98069_pair_medium.jpg"
            price={"69.99"}
            rating={"4.5"}
            numReviews={"37"}
            details={"Women Zalava Combat boot"}
            sale={"Sale"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Dr. Martin's"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/97/55/1/97551_pair_medium.jpg"
            price={"69.99"}
            rating={"4.5"}
            numReviews={"37"}
            details={"Women Zalava Combat boot"}
            sale={"Sale"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Dr. Martin's"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/94/82/5/94825_pair_medium.jpg"
            price={"69.99"}
            rating={"4.5"}
            numReviews={"37"}
            details={"Women Zalava Combat boot"}
            sale={"Sale"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Euro Soft"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/97/89/7/97897_pair_medium.jpg"
            price={"54.99"}
            rating={"2.5"}
            numReviews={"12"}
            details={"Women Ahead Combat Bootie"}
            sale={"Sale"}
          />
        </Box>
      </Box>

      <br />
      <br />

      {/*Style Up. Spend Down.*/}

      <Box
        style={{
          border: "0px solid red",
        }}
        display={{ base: "grid", md: "flex" }}
        margin={{ base: "auto", md: "auto" }}
        width={{ base: "90%", md: "50%" }}
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4,1fr)" }}
        gridTemplateRows={{ base: "repeat(2, 200px)" }}
        justifyContent={{ base: "space-around", md: "space-around" }}
      >
        <Box
          border={"0px solid red"}
          width="150px"
          height={"140px"}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgImage={
            "url(https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/price-bubbles/wk48_pricebubbles_performance.jpg?h=148&iar=0&w=150&hash=DE7D0EB08472865D432ADBEEFCBEAE84)"
          }
        >
          <Text color={"white"}>
            Performance{" "}
            <span>
              <br />
              Shoes Under
            </span>
            <span>
              {" "}
              <br /> $ 50
            </span>
          </Text>
        </Box>
        <Box
          border={"0px solid red"}
          width="150px"
          height={"140px"}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgImage={
            "url(https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/price-bubbles/wk48_pricebubbles_nike.jpg?h=148&iar=0&w=150&hash=59E5593AD4402D0195C45F308E95FFA7)"
          }
        >
          <Text color={"white"}>
            Nike{" "}
            <span>
              <br />
              Clearance
            </span>
          </Text>
        </Box>
        <Box
          border={"0px solid red"}
          width="150px"
          height={"140px"}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgImage={
            "url(https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/price-bubbles/wk48_pricebubbles_performance.jpg?h=148&iar=0&w=150&hash=DE7D0EB08472865D432ADBEEFCBEAE84)"
          }
        >
          <Text color={"white"}>
            Women's{" "}
            <span>
              <br />
              Boots Under
            </span>
            <span>
              {" "}
              <br /> $ 50
            </span>
          </Text>
        </Box>
        <Box
          border={"0px solid red"}
          width="150px"
          height={"140px"}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgImage={
            "url(https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/price-bubbles/wk48_pricebubbles_kids-clearance.jpg?h=148&iar=0&w=150&hash=9DDB7D9E793FD54571D34D22DEB82DA1)"
          }
        >
          <Text color={"white"}>
            Kids{" "}
            <span>
              <br />
              Clerance
            </span>
          </Text>
        </Box>
      </Box>
      <br />
      <br />
      <Box
        borderWidth="1px"
        borderRadius="0px"
        overflow="hidden"
        // border={"1px solid red"}
        width={{ base: "100%", md: "80%" }}
        margin={"auto"}
        border={"0px solid black"}
      >
        <Image
          height={{ base: "200px", md: "80%" }}
          src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/1-story/wk51_011523_1_story_single_courtsneakers.jpg"
          alt="Comfort"
        />
        <br />
        <Text>Up your sneaker game with fresh color combos.</Text>
      </Box>
      <br />
      <br />

      {/*SHOP COURT SNEAKERS.*/}

      <Box>
        <Heading
          margin={"auto"}
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="22px"
          mb={"5%"}
          borderBottom={"3px solid black"}
          width="280px"
        >
          SHOP COURT SNEAKERS
        </Heading>
        <Box
          display={{ md: "flex" }}
          width={{ xl: "70%" }}
          gap={"30px"}
          margin="auto"
        >
          <Box>
            <Image
              width={"100%"}
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/2-story/wk51_011523_story_2_a_spotlight.jpg"
              alt="#"
            />
            <Heading
              margin={"auto"}
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="22px"
              mb={"5%"}
              mt={"3%"}
              width="280px"
            >
              Style Spotlight
            </Heading>
            <Text mb={"5%"} mt={"3%"}>
              Hot new loafers from Circus NY to wear now and later.
            </Text>
            <Heading
              margin={"auto"}
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="16px"
              mb={"5%"}
              borderBottom={"3px solid black"}
              width="145px"
            >
              SHOP THIS STYLE
            </Heading>
          </Box>
          <Box>
            <Image
              width={"100%"}
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/2-story/wk51_011523_story_2_b_platforms.jpg"
              alt="#"
            />
            <Heading
              margin={"auto"}
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="22px"
              mb={"5%"}
              mt={"3%"}
              width="280px"
            >
              Make a Statement
            </Heading>
            <Text mb={"5%"} mt={"3%"}>
              Show off a look all your own in Vans sneakers.
            </Text>
            <Heading
              margin={"auto"}
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="16px"
              mb={"5%"}
              borderBottom={"3px solid black"}
              width="95px"
            >
              SHOP VANS
            </Heading>
          </Box>
        </Box>
      </Box>

      <br />

      {/*Gear Up for the New Year*/}

      <br />

      <Box
        display={{ base: "grid", xl: "flex" }}
        width="80%"
        gap={"20px"}
        margin="auto"
      >
        <Box border={"0px solid red"}>
          <br />
          <Text fontSize={"22px"} fontWeight={"600"}>
            Gear Up for the New Year
          </Text>
          <br />
          <Text w={"250px"} margin="auto">
            Start the year off right with all the hottest looks.
          </Text>
          <br />

          <Image
            mt={"50px"}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/trend/wk49_010123_hp_trend_mini_hub_3_a_active.jpg"
            alt="#"
          />
        </Box>
        <Box border={"0px solid red"}>
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/trend/wk49_010123_hp_trend_mini_hub_3_b_boots.jpg"
            alt="#"
          />
        </Box>
        <Box border={"0px solid red"}>
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/holiday/trend/wk49_010123_hp_trend_mini_hub_3_c_sneaker.jpg"
            alt="#"
          />
        </Box>
      </Box>

      <br />

      {/*SHOP COURT SNEAKERS.*/}

      <br />

      <Box
        borderWidth="1px"
        borderRadius="0px"
        overflow="hidden"
        // border={"1px solid red"}
        width={{ base: "100%", md: "80%" }}
        margin={"auto"}
        border={"0px solid black"}
      >
        <Image
          height={{ base: "200px", md: "80%" }}
          src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/post-holiday/1-story/wk51_011523_1_story_single_getawayshop_new.jpg"
          alt="Comfort"
        />
        <br />
        <Text>Get ready for a warm-weather escape with top vacay picks.</Text>
        <br />
        <Heading
          margin={"auto"}
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="22px"
          mb={"5%"}
          borderBottom={"3px solid black"}
          width="200px"
        >
          GETAWAY STYLES
        </Heading>
      </Box>

      <br />

      {/*Best Sellers*/}

      <br />

      <Box>
        <Heading
          margin={"auto"}
          marginTop="2%"
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="22px"
          //   borderBottom={"3px solid black"}
          paddingBottom="5px"
          width="230px"
          mb={"3%"}
        >
          Best Sellers
        </Heading>
        <Box
          display={{ base: "grid", md: "flex" }}
          //   border="1px solid red"
          width={{ md: "80%" }}
          margin="auto"
        >
          <ShopBootSaleCard
            isNew={true}
            sale="Online Only"
            name="Crocks"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/74/30/7/74307_pair_medium.jpg"
            price={"49.99"}
            rating={"4.5"}
            numReviews={"377"}
            details={"Classic Clogs"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Nike"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/98/23/1/98231_pair_medium.jpg"
            price={"89.99"}
            rating={"4.8"}
            numReviews={"14"}
            details={"Women Air Max Excess Sneakers"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Crocks"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/38/20/8/38208_pair_medium.jpg"
            price={"74.99"}
            rating={"5"}
            numReviews={"20"}
            details={"Women Zalava Combat Crocks"}
            sale="New"
          />
          <ShopBootSaleCard
            isNew={true}
            name="Nike"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/32/65/7/32657_pair_medium.jpg"
            price={"79.99"}
            rating={"3.5"}
            numReviews={"13"}
            details={"Women Air Max Excess Sneakers"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Nike"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/73/59/2/73592_pair_medium.jpg"
            price={"54.99"}
            rating={"2.5"}
            numReviews={"12"}
            details={"Women Combat Alta Bootie"}
            sale="Clerance"
          />
        </Box>
      </Box>

      {/*Gotta-Have Brands*/}

      <Heading
        margin={"auto"}
        marginTop="0%"
        fontFamily="sans-serif"
        fontWeight="600"
        fontSize="22px"
        //   borderBottom={"3px solid black"}
        paddingBottom="5px"
        width="230px"
        mb={"1%"}
        color="#333f48"
      >
        Gotta-Have Brands
      </Heading>
      <Box
        display={{ base: "grid", md: "flex" }}
        border={"0px solid red"}
        margin={"auto"}
        gap={"5px"}
        width={{ base: "90%", md: "70%" }}
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4,1fr)" }}
        gridTemplateRows={{ base: "repeat(3, 200px)" }}
        justifyContent={{ base: "space-around", md: "space-around" }}
      >
        {brandImges.map((el) => (
          <Image width={"180px"} src={el} alt="#" />
        ))}
      </Box>
      <br />
      {/* New Arrivals*/}

      <Box>
        <Heading
          margin={"auto"}
          marginTop="2%"
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="22px"
          //   borderBottom={"3px solid black"}
          paddingBottom="5px"
          width="230px"
          mb={"3%"}
        >
          Best Sellers
        </Heading>
        <Box
          display={{ base: "grid", md: "flex" }}
          //   border="1px solid red"
          width={{ md: "80%" }}
          margin="auto"
        >
          <ShopBootSaleCard
            isNew={true}
            sale="New"
            name="Crocks"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/38/20/8/38208_pair_medium.jpg"
            price={"49.99"}
            rating={"4.5"}
            numReviews={"377"}
            details={"Classic Clogs"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Nike"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/38/38/2/38382_pair_medium.jpg"
            price={"89.99"}
            rating={"4.8"}
            numReviews={"14"}
            details={"Women Air Max Excess Sneakers"}
            sale={"Echo-Concious"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Crocks"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/38/38/3/38383_pair_medium.jpg"
            price={"74.99"}
            rating={"5"}
            numReviews={"20"}
            details={"Women Zalava Combat Crocks"}
            sale="Echo-Concious"
          />
          <ShopBootSaleCard
            isNew={true}
            name="Nike"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/38/30/7/38307_pair_medium.jpg"
            price={"79.99"}
            rating={"3.5"}
            numReviews={"13"}
            details={"Women Air Max Excess Sneakers"}
            sale={"New"}
          />
          <ShopBootSaleCard
            isNew={true}
            name="Nike"
            imageURL="https://www.famousfootwear.com/blob/product-images/20000/38/30/8/38308_pair_medium.jpg"
            price={"54.99"}
            rating={"2.5"}
            numReviews={"12"}
            details={"Women Combat Alta Bootie"}
            sale="New"
          />
        </Box>
      </Box>

      <Box
        display={{ base: "grid", md: "flex" }}
        width={{ base: "100%", md: "80%" }}
        margin="auto"
        border={"0px solid green"}
        p={{ base: "0", md: "30" }}
      >
        <Image height={{ base: "150%", xl: "40%" }} src={REWARDS} alt="#" />
      </Box>
      <br />
      <br />
      <Box>
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
          We Love To See Your Style
        </Heading>
      </Box>

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
      <Footer />
    </div>
  );
};

export default LandingPage;
