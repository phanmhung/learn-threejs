import { IconButton, useColorMode } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import Paragraph from "@/widgets/Paragraph";
import WidgetForm from ".";

export function Widget() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };

  const backgroundColor = {
    light: "#f0e7db",
    dark: "gray.800",
  };

  return (
    <>
      <Box position="fixed" bottom="20px" right="20px">
        <Popover>
          <PopoverTrigger>
            <IconButton
              backgroundColor={backgroundColor[colorMode]}
              _hover={{ background: "none", marginTop: "20px" }}
              color={iconColor[colorMode]}
              aria-label="Open Widget"
              icon={<ChatIcon />}
            />
          </PopoverTrigger>
          <WidgetForm />
        </Popover>
      </Box>
    </>
  );
}
