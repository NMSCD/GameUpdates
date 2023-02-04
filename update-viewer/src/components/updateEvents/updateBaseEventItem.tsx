import { Box, Center, GridItem, Skeleton, Text, VStack } from '@hope-ui/solid';
import { Component, For, JSX, Show } from 'solid-js';
import { NetworkState } from '../../constants/enum/networkState';

interface IProps {
    networkState: NetworkState;
    platform: string;
    numberOfSkeletonBars?: number
    children?: JSX.Element;
}

export const UpdateBaseEventItem: Component<IProps> = (props: IProps) => {

    return (
        <GridItem
            as={VStack}
            bg="$neutral3"
            rounded="$sm"
            px="$6"
            pb="$6"
            maxW="$sm"
            textAlign="center"
            class="feature-item"
        >
            <Center
                bg="$primary9"
                boxSize="$12"
                rounded="$sm"
                shadow="$md"
                css={{
                    transform: "translateY(-50%)",
                }}
            >
                <Box color="$neutral1" boxSize="$6" ></Box>
            </Center>
            {/* <Text class="noselect" fontSize="$lg" fontWeight="$semibold" mt="-8px" mb="$3">
                {props.platform}
            </Text> */}
            <Box width="100%">
                <Show when={props.networkState == NetworkState.Loading}>
                    <For each={Array(props.numberOfSkeletonBars ?? 1)}>
                        {
                            (_, __) => <Skeleton height="20px" marginBottom="5px" />
                        }
                    </For>
                </Show>
                <Show when={props.networkState == NetworkState.Success}>
                    {props.children}
                </Show>
            </Box>
        </GridItem>
    );
}
