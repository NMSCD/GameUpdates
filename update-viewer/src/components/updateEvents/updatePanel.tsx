import { Container, Heading, Image, SimpleGrid, VStack } from '@hope-ui/solid';
import { Component, createSignal, onMount, Show } from 'solid-js';
import { NetworkState } from '../../constants/enum/networkState';
import { GunterUpdateDto } from '../../contracts/gunterUpdateDto';
import { anyObject } from '../../helper/typescriptHacks';
import { AssistantNmsApi } from '../../services/assistantNmsApi';
import { GenericUpdateEventItem } from './genericUpdateEventItem';
import { Ps4UpdateEventItem } from './ps4UpdateEventItem';
import { SteamUpdateEventItem } from './steamUpdateEventItem';

export const UpdatePanel: Component = () => {
    const [networkState, setNetworkState] = createSignal<NetworkState>(NetworkState.Loading);
    const [updateData, setUpdateData] = createSignal<GunterUpdateDto>();

    onMount(async () => {
        const service = new AssistantNmsApi();
        const result = await service.getUpdateData();
        if (result.isSuccess == false) {
            setNetworkState(NetworkState.Error);
            return;
        }
        setUpdateData(result.value);
        setNetworkState(NetworkState.Success);
    });

    return (
        <Container>
            <VStack mx={{ "@initial": "$4", "@xl": "auto" }} py={{ "@initial": "$10", "@sm": "$20" }}>
                <Show when={networkState() == NetworkState.Error}>
                    <Image
                        src="/assets/img/error.png"
                        alt="Error"
                        objectFit="cover"
                        maxW="25%"
                    />
                    <Heading marginTop="2em" size="2xl">Oops! Something went wrong</Heading>
                </Show>
                <Show when={networkState() == NetworkState.Success}>
                    <SimpleGrid
                        columns={{ "@initial": 1, "@sm": 2, "@lg": 3 }}
                        columnGap="$12"
                        rowGap={{ "@initial": "$14", "@sm": "$20" }}
                        mx="auto"
                    >
                        <SteamUpdateEventItem
                            networkState={networkState()}
                            steamDepots={updateData()?.steamDepots ?? []}
                        />
                        <GenericUpdateEventItem
                            networkState={networkState()}
                            image="gog.png"
                            platform="GoG"
                            data={updateData()?.gog ?? anyObject}
                        />
                        <Ps4UpdateEventItem
                            networkState={networkState()}
                            datas={updateData()?.ps4 ?? []}
                        />
                        <GenericUpdateEventItem
                            networkState={networkState()}
                            image="ps4.png"
                            platform="PS5"
                            data={updateData()?.ps5 ?? anyObject}
                        />
                        <GenericUpdateEventItem
                            networkState={networkState()}
                            image="switch.png"
                            platform="Nintendo Switch"
                            data={updateData()?.switch ?? anyObject}
                        />
                    </SimpleGrid>
                </Show>
            </VStack>
        </Container>
    );
}
