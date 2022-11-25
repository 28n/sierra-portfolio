import { Box } from "@chakra-ui/react";
import { Tooltip } from "react-tippy";

export const TechItem = ({ icon, name }) => {
  return (
    <Box as="li" display={"flex"} padding={2}>
      <Tooltip title={name} position={"top"} duration={250}>
        <Box as="span" height={6} width={6}>
          {icon}
        </Box>
      </Tooltip>
    </Box>
  );
};

<style jsx>{`
  .tech-item {
    height: 100%;
    width: 100%;
  }
`}</style>;
