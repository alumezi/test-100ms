import React from "react";
import { Flex } from "@100mslive/react-ui";
import { LogoComponent, SpeakerTag } from "./HeaderComponents";
import { ParticipantCount } from "./ParticipantList";
import { StreamActions } from "./StreamActions";

export const ConferencingHeader = ({ isPreview }) => {
  return (
    <Flex
      justify="between"
      align="center"
      css={{ position: "relative", height: "100%" }}
    >
      <Flex align="center" css={{ position: "absolute", left: "$10" }}>
        <LogoComponent />
        {!isPreview ? <SpeakerTag /> : null}
      </Flex>

      <Flex
        align="center"
        css={{
          position: "absolute",
          right: "$10",
          gap: "$4",
        }}
      >
        <StreamActions />
        <ParticipantCount />
      </Flex>
    </Flex>
  );
};
