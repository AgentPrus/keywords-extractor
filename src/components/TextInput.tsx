import { Textarea, Button, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const TextInput = ({
  extractKeywords,
}: {
  extractKeywords: (text: string) => void;
}) => {
  const [text, setText] = useState("");
  const toast = useToast();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter some text",
        status: "error",
        duration: 3000,
        isClosable: false,
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={handleChange}
      />

      <Button
        bg="blue.500"
        color="white"
        margin={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={handleSubmit}
      >
        Extract keywords
      </Button>
    </>
  );
};

export default TextInput;
