import { Tooltip as reakit_tooltip } from 'reakit';
import { default as styled } from 'styled-components';

const StyledTooltip = styled(reakit_tooltip)`
    font-size: 14px;
    font-weight: 500;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 12px;
`;

const StyledArrow = styled(reakit_tooltip.Arrow)``;

export const Tooltip = Object.assign(StyledTooltip, { Arrow: StyledArrow });
