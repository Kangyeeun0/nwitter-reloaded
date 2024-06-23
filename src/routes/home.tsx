import PostTweetForm from '../components/st-tweet-form';
import styled from 'styled-components';
import TimeLine from '../components/timeline';

const Wrapper = styled.div`
    display: grid;
    gap: 50px;
    overflow-y: scroll;
    grid-template-rows: 1fr 5fr;
`;

export default function Home() {
    return (
        <Wrapper>
            <PostTweetForm />
            <TimeLine />
        </Wrapper>
    );
}
