import React from "react";
import { Button, Input, styled } from "@100mslive/react-ui";
import { isStreamingKit } from "../../common/utils";

const PreviewName = ({
  name,
  email,
  onChangeEmail,
  onChangeName,
  onJoin,
  enableJoin,
}) => {
  const formSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={formSubmit}>
      <Input
        required
        id="name"
        css={{ w: "100%" }}
        value={name}
        onChange={e => onChangeName(e.target.value)}
        placeholder="Enter your name"
        autoFocus
        autoComplete="name"
      />
      <Input
        required
        id="email"
        css={{ w: "100%" }}
        value={email}
        onChange={e => onChangeEmail(e.target.value)}
        placeholder="Enter your email"
        autoFocus
        type="email"
        autoComplete="email"
      />
      <Button
        type="submit"
        disabled={!name || !email || !enableJoin}
        onClick={onJoin}
        css={{ w: "100%" }}
      >
        {isStreamingKit() ? "Join Studio" : "Join Room"}
      </Button>
    </Form>
  );
};

const Form = styled("form", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "$4",
  mt: "$10",
  mb: "$10",
});

export default PreviewName;
