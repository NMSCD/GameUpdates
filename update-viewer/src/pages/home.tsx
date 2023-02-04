import { Box, Heading, VStack } from '@hope-ui/solid';
import { Component } from 'solid-js';
import { UpdatePanel } from '../components/updateEvents/updatePanel';

export const HomePage: Component = () => {

    return (
        <div class="wrapper">
            <VStack class="full-size" justifyContent="center">
                <Box margin="2em"></Box>
                <Heading size="5xl" marginBottom="$8">Latest update information</Heading>
                <UpdatePanel />
            </VStack>
        </div>
    );
};

export default HomePage;