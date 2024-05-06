import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);
interface DogContainerProps {
  children?: React.ReactNode;
}
export const ModelContainer = forwardRef<HTMLDivElement, DogContainerProps>(
  function ModelContainer ({ children }, ref){
    return(
    <Box
    ref={ref}
    m="auto"
    mt={['-20px', '-60px', '-100px']}
    mb={['-40px', '-140px', '-80px']}
    w={[180, 640, 640]}
    h={[180, 480, 640]}
    position="relative"
    zIndex="0"  
    alignSelf={['center', 'center', 'center']}
    >
      {children}
    </Box>
    )
  }
);

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};

export default Loader;
