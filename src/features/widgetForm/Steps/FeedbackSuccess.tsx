import {
  Button,
  Image,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader
} from "@chakra-ui/react";
import successImage from "~/images/success.svg";
import Paragraph from "@/widgets/paragraph";

interface FeedbackSuccessProps {
  onFeedbackRestart: () => void;
}

export function FeedbackSuccess({ onFeedbackRestart }: FeedbackSuccessProps) {



  return (
    <>

        <PopoverHeader>
          <Image boxSize="10px" src={successImage} alt="Sucesso" />
          <PopoverCloseButton />
        </PopoverHeader>
        <PopoverBody>
          <Paragraph>Thanks for your feedback!</Paragraph>
          <Button onClick={onFeedbackRestart} variant="outline" size="sm">
           Send another Feedback
          </Button>
        </PopoverBody>

    </>
  );
}
