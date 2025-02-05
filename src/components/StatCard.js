import { Box, Text, Badge, HStack } from "@chakra-ui/react";

export const StatCard = ({ title, value, badge, badgeLabel, badgeColor = "green", extra }) => {
  return (
    <Box
      p="4"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      textAlign="left"
      minW="180px"
      h="90px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      fontFamily="Inter, sans-serif" // Font similar to the design
    >
      {/* Title */}
      <Text fontSize="11px" fontWeight="600" color="gray.500" letterSpacing="wide">
        {title}
      </Text>

      {/* Value & Badge */}
      <HStack spacing={2}>
      <Badge bg={`gray.100`} color={`black.600`} borderRadius="md" px="2" py="0.5">
          {value}
        </Badge>

        {badge && (
          <Badge bg={`${badgeColor}.100`} color={`${badgeColor}.600`} borderRadius="md" px="2" py="0.5">
            {badgeLabel}
          </Badge>
        )}

        {extra && (
          <Badge bg={`gray.100`} color={`black.600`} borderRadius="md" px="2" py="0.5">
            {extra.toLowerCase()}
            </Badge>
        )}
      </HStack>
    </Box>
  );
};
export default StatCard
