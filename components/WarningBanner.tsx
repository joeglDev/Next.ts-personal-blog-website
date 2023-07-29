import styled from "@emotion/styled";
import { COLOURS } from "../globals/colours";

interface WarningBannerProps {
    value: string
}

export const WarningBanner  = ({value}: WarningBannerProps) => {
  const WarningBanner  = styled.div`
    width: 100%;
    height: 3rem;
    background-color: ${COLOURS.warning};
    color: white;
    padding: 0.5rem;
  `;

  return (
    <WarningBanner >
    {value}
    </WarningBanner >
  );
};
