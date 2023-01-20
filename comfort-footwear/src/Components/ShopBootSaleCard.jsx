import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { Truncate } from "@primer/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

// const data = {
//   isNew: true,
//   imageURL:
//     "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
//   //   name: "Wayfarer Classic",
//   price: 4.5,
//   rating: 4.2,
//   numReviews: 34,
//   details: "Women Java compat boot",
// };

function Rating({ rating, numReviews }) {
  return (
    <Box
      border={"0px solid red"}
      display="flex"
      alignItems="center"
      justifyContent={"center"}
    >
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1", width: "13px" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf key={i} style={{ marginLeft: "1", width: "13px" }} />
            );
          }
          return <BsStar key={i} style={{ marginLeft: "1", width: "13px" }} />;
        })}

      <Box as="span" ml="2" color="gray.600" fontSize="14px">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ShopBootSaleCard({
  isNew,
  name,
  imageURL,
  price,
  rating,
  numReviews,
  details,
  sale,
}) {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      border="0px solid red"
      height={"auto"}
      padding={0}
    >
      <Box
        //   bg={useColorModeValue("white", "gray.800")}
        // width="80%"
        height={{ base: "auto", md: "auto" }}
        border="0px solid red"
        padding={"10px"}
      >
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          border={"0px solid green"}
          width={{ base: "60%", md: "80%" }}
          height={{ base: "auto", md: "180px" }}
          objectFit="contain"
          margin="auto"
          src={imageURL}
          alt={`Picture of ${name}`}
        />
        <br />

        <Box p="6" border={"0px solid blue"} width="100%">
          <Box>
            {isNew && (
              <Badge
                backgroundColor={"white"}
                px="2"
                fontSize="14px"
                color="#0073ae"
              >
                {sale}
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="center" alignContent="center">
            <Truncate fontWeight="bold" fontSize={"14px"}>
              {name}
            </Truncate>
          </Flex>

          <Truncate>{details}</Truncate>
          <Box alignContent="center">
            <Box fontSize="14px" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="14px">
                $
              </Box>
              {price}
            </Box>

            <Rating numReviews={numReviews} rating={rating} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default ShopBootSaleCard;
