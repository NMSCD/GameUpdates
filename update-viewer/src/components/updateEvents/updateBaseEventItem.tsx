import { Box, Center, GridItem, Image, Skeleton, Text, VStack } from '@hope-ui/solid';
import { Component, For, JSX, Show } from 'solid-js';
import { NetworkState } from '../../constants/enum/networkState';

interface IProps {
    networkState: NetworkState;
    image: string;
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
            <Image
                src={`/assets/img/${props.image}`}
                alt="platform image"
                objectFit="cover"
                width="5em"
                css={{
                    transform: "translateY(-50%)",
                }}
            />
            <Text class="card-platform noselect" color="$primary11" fontSize="$lg" fontWeight="$semibold">
                {props.platform}
            </Text>
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
