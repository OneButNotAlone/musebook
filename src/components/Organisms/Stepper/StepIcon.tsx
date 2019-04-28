import * as React from 'react';
import * as config from './config';

import { isNumber } from 'util';
import Numeric from './icons/Numeric';
import Checkmark from './icons/CheckMark';

interface LeftColumnProps {
    icon: number | config.StatusIcon;
    status: config.Status;
    renderLine?: boolean;
    width?: number; // This is a square, no height needed
}

export class LeftColumn extends React.Component<LeftColumnProps> {
    constructor(props: LeftColumnProps) {
        super(props);
    }

    // Factor into it's own component
    renderIcon(icon: number | config.StatusIcon): React.ReactNode {
        const { width = 46 } = this.props;
        if (isNumber(icon)) {
            return <Numeric value={icon} width={width} />;
        } else {
            switch (icon) {
                case 'CHECKMARK':
                    return <Checkmark />;
                default:
                    return null;
            }
        }
    }

    render() {
        const { icon, status, width = 46, renderLine = true } = this.props;

        return (
            <svg width={width} height="100%">
                <circle
                    fill={config.StatusColors[status]}
                    cx={width / 2}
                    cy={width / 2}
                    r={width / 2}
                />
                {this.renderIcon(icon)}
                {renderLine && (
                    <line
                        x1={width / 2}
                        y1={width + 16}
                        x2={width / 2}
                        y2="100%"
                        stroke="#CCCCCC"
                        strokeWidth="1"
                    />
                )}
            </svg>
        );
    }
}

export default LeftColumn;
