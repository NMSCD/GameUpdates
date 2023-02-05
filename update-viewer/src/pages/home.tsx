import { Alert, Anchor, Avatar, Box, Heading, VStack } from '@hope-ui/solid';
import { Component } from 'solid-js';
import { UpdatePanel } from '../components/updateEvents/updatePanel';

export const HomePage: Component = () => {

    return (
        <div class="wrapper">
            <VStack class="update-panel" justifyContent="center">
                <Box margin="1em"></Box>
                <Heading size="5xl" marginBottom="$8">Latest update information</Heading>
                <UpdatePanel />
            </VStack>
            <Anchor href="https://discord.gg/nomanssky" class="mini-alert">
                <Alert status="success">
                    <Avatar name="Gunter" src="/assets/img/gunter.webp" marginRight="1em" />
                    Special thank you to Gunter for providing the update information! 💖 <br />Check them out in the No Man's Sky Discord!
                </Alert>
            </Anchor>
        </div>
    );
};

export default HomePage;