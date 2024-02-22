import { Box, Container, Heading, HStack, Text } from '@hope-ui/solid';
import type { Component } from 'solid-js';

import { BasicLink } from '../core/link';

export const Header: Component = () => {
    return (
        <Box id="header" class="noselect">
            <Container padding="2em 0 0 0">
                <HStack justifyContent="space-between">
                    <Heading size="3xl">NMS Updates</Heading>
                    <BasicLink href="https://www.nomanssky.com/omega-update/" additionalClassNames="hidden-in-mobile">
                        <Box border="2px solid" borderRadius="0.5em" padding="0.5em 1em">
                            <Text color="white">Latest Patch Notes</Text>
                        </Box>
                    </BasicLink>
                </HStack>
            </Container>
        </Box>
    );
}
