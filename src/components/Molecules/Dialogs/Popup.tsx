import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../Atoms/Button';

const PopupBkg = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.5);
    text-align: center;
`;

const PopupInner = styled.div`
    min-width: 25vw;
    max-width: 30vw;
    height: auto;
    border: 1px solid #979797;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: calc(50vh - 120px);
`;

const PopupHeader = styled.div`
    height: 54px;
    color: #666666;
    font-family: 'Bogle', sans-serif;
    font-size: 20px;
    line-height: 27px;
    font-weight: bold;
    margin: 24px 24px 16px 24px;
`;

const PopupSubtext = styled.p`
    height: 50px;
    color: #666666;
    font-family: 'Bogle', sans-serif;
    font-size: 18px;
    line-height: 25px;
    font-weight: default;
    margin: 0px 24px 24px 24px;
`;

interface PopupProps {
    msg: string;
    close: () => void;
    show: boolean;
}

export const Popup: React.SFC<PopupProps> = ({ msg, close, show }) => (

    show ?
        <PopupBkg>
            <PopupInner>
                    <PopupHeader>{msg}</PopupHeader>
                    <PopupSubtext>{'Please try again or contact app team for assistance.'}</PopupSubtext>
                    <Button style={{alignSelf: 'flex-end', marginTop: '0px', marginRight: '24px', marginBottom: '24px' }} onClick={close}>OK</Button>
            </PopupInner>
        </PopupBkg>
        :
        null

);

export default Popup;
