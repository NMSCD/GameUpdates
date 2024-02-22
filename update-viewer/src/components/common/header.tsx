import { Box, Container, Heading, HStack, Spinner, Text } from '@hope-ui/solid';
import { createSignal, Match, onMount, Show, Switch, type Component } from 'solid-js';

import { NetworkState } from '../../constants/enum/networkState';
import { NewsPost } from '../../contracts/newsPost';
import { ReleaseNote } from '../../contracts/releaseNote';
import { AssistantNmsApi } from '../../services/assistantNmsApi';
import { BasicLink } from '../core/link';

export const Header: Component = () => {
    const [networkState, setNetworkState] = createSignal<NetworkState>(NetworkState.Loading);
    const [latestReleaseNotes, setLatestReleaseNote] = createSignal<ReleaseNote>();
    const [latestNewsPost, setLatestNewsPosts] = createSignal<NewsPost>();

    onMount(async () => {
        const api = new AssistantNmsApi();
        const results = await Promise.all([
            api.getReleases(),
            api.getNews(),
        ]);

        const numFailures = results.filter(r => r.isSuccess === false).length;
        if (numFailures > 0) {
            setNetworkState(NetworkState.Error);
            return;
        }

        const [releaseNotes, newsPosts] = results
        if (releaseNotes.isSuccess == true && releaseNotes.value?.length > 0) {
            setLatestReleaseNote(releaseNotes.value[0]);
        }
        if (newsPosts.isSuccess == true && newsPosts.value?.length > 0) {
            setLatestNewsPosts(newsPosts.value[0]);
        }
        setNetworkState(NetworkState.Success);
    });

    return (
        <Box id="header" class="noselect">
            <Container padding="2em 0 0 0">
                <HStack justifyContent="space-between">
                    <Heading size="3xl">NMS Updates</Heading>
                    <HStack gap="$3">
                        <Switch>
                            <Match when={networkState() === NetworkState.Loading}>
                                <BasicLink href="/" additionalClassNames="hidden-in-mobile">
                                    <Box border="2px solid" borderRadius="0.5em" padding="0.5em 1em">
                                        <HStack gap="$4">
                                            <Spinner thickness="3px" color="$primary9" />
                                            <Text color="white">Loading</Text>
                                        </HStack>
                                    </Box>
                                </BasicLink>
                                <BasicLink href="/" additionalClassNames="hidden-in-mobile">
                                    <Box border="2px solid" borderRadius="0.5em" padding="0.5em 1em">
                                        <HStack gap="$4">
                                            <Spinner thickness="3px" color="$primary9" />
                                            <Text color="white">Loading</Text>
                                        </HStack>
                                    </Box>
                                </BasicLink>
                            </Match>
                            <Match when={networkState() === NetworkState.Success}>
                                <Show when={latestReleaseNotes()?.link != null}>
                                    <BasicLink href={latestReleaseNotes()?.link ?? ''} additionalClassNames="hidden-in-mobile">
                                        <Box border="2px solid" borderRadius="0.5em" padding="0.5em 1em">
                                            <Text color="white">Latest Release Note</Text>
                                        </Box>
                                    </BasicLink>
                                </Show>
                                <Show when={latestNewsPost()?.link != null}>
                                    <BasicLink href={latestNewsPost()?.link ?? ''} additionalClassNames="hidden-in-mobile">
                                        <Box border="2px solid" borderRadius="0.5em" padding="0.5em 1em">
                                            <Text color="white">Latest News Post</Text>
                                        </Box>
                                    </BasicLink>
                                </Show>
                            </Match>
                            <Match when={networkState() === NetworkState.Error}>
                                <span></span>
                            </Match>
                        </Switch>
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
}
