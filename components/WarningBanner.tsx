import styled from "@emotion/styled";
import { COLOURS } from "../globals/colours";

interface WarningBannerProps {
  value: string;
}

export const WarningBanner = ({ value }: WarningBannerProps) => {
  const WarningBanner = styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: ${COLOURS.warning};
    color: white;
    padding: 0.5rem;
    text-align: center;
  `;

  return <WarningBanner>{value}</WarningBanner>;
};
