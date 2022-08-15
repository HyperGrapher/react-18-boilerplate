import styled from 'styled-components'

const ContentMain = styled.div`
    min-height: 100vh; 
`

type Props = {
    children: JSX.Element;
}

const PageWrapper: React.FC<Props> = ({ children }) => (
    <ContentMain>
        {children}
    </ContentMain>)

export default PageWrapper;