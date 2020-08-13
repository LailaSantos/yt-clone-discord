import styled from 'styled-components';


export const Container = styled.div`
    grid-area: UL;
    display: flex;
    flex-direction: column;
    
    padding: 3px 6px 0 16px;
    background-color: var(--secondary);

/* altura máxima da tela(100) - o tamanho da barrinha de cima (46px)*/ 
    max-height: calc(100vh - 46px); 
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;   
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Role = styled.span`
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
`; 

export const User = styled.div`
    display: flex;
    align-items: center;

    margin-top: 5px;
    padding: 5px;
    border-radius: 4px;
    background: transparent;

    transition: background .2s;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    > strong {
        color: var(--white);
        font-weight: 500;
        margin-left: 13px;
        opacity: 0.7;

        /* cortar o nome da pessoa e colocar os ... */
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > span {
        color: var(--white);
        background: var(--discord);
        margin-left: 9px;
        border-radius: 4px;
        padding: 4px 5px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
    }
`;

export const Avatar = styled.div`
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary);

    &.bot {
        background-color: var(--mention-detail);

    }
`;

