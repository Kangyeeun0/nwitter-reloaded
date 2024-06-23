import { collection, getDocs, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

export interface ITweet {
    photo: string;
    tweet: string;
    userId: string;
    username: string;
    createdAt: number;
}

const Wrapper = styled.div``;

export default function TimeLine() {
    const [tweets, setTweet] = useState<ITweet[]>([]);
    const fetchTweet = async () => {
        const tweetsQuery = query(collection(db, 'tweets'), orderBy('createAt', 'desc'));
        const snapshot = await getDocs(tweetsQuery);
        snapshot.docs.forEach((doc) => console.log(doc.data()));
    };
    useEffect(() => {
        fetchTweet();
    }, []);
    return <Wrapper>{JSON.stringify(tweets)}</Wrapper>;
}
