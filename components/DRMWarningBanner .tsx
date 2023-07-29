import styled from "@emotion/styled";
import { COLOURS } from "../globals/colours";

export const DRMWarningBanner  = () => {
  const DRMWarningBanner  = styled.div`
    width: 100%;
    height: 3rem;
    background-color: ${COLOURS.warning};
    color: white;
    padding: 0.5rem;
  `;

  return (
    <DRMWarningBanner >
      Web Environment Integrity is a Google euphemism for a DRM that is designed
      to prevent ad-blocking. In support of an open web, this website does not
      function with this DRM. Please install a browser such as{" "}
      <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> that
      respects your freedom and supports ad blockers.
    </DRMWarningBanner >
  );
};
