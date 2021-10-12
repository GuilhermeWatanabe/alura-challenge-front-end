import styled from "styled-components";
import { baseRadius } from "../UI/variables";

const Editor = styled.div`
    background-color: #141414;
    border: 32px solid #6BD1FF;
    border-radius: ${baseRadius};
    box-sizing: border-box;
    display: inline-block;
    height: 400px;
    padding: 1em;
    width: 50%;
`;

const Dots = styled.ul`
    list-style-type: none;
    margin-block-end: 0;
    margin-block-start: 0;
    margin-bottom: 24px;
    padding-inline-start: 0;

    li {
        border-radius: 100%;
        display: inline-block;
        height: 12px;
        margin-right: 8px;
        width: 12px;
    }

    li:nth-child(1) {
        background-color: #ff5f56;
    }

    li:nth-child(2) {
        background-color: #ffbd2e;
    }

    li:nth-child(3) {
        background-color: #27c93f;
    }

    li:last-child {
        margin-right: 0;
    }
`;

const Code = styled.textarea`
    background-color: #141414;
    border: none;
    box-sizing: border-box;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: calc(100% - 42px);
    outline: none;
    padding: 0;
    resize: none;
    width: 100%;
`;

const CodeEditor = () => {
    return (
        <>
            <Editor>
                <Dots>
                    <li></li>
                    <li></li>
                    <li></li>
                </Dots>
                <Code>
                    
                </Code>
            </Editor>
        </>
    );
};

export default CodeEditor;
