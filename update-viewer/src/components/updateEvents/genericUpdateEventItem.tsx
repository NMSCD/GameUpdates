import { HStack, Text, Tbody, Td, Th, Thead, Tooltip, Tr, VStack } from '@hope-ui/solid';
import { Component, For } from 'solid-js';
import { NetworkState } from '../../constants/enum/networkState';
import { GunterUpdateBaseDto, SteamDepot } from '../../contracts/gunterUpdateDto';
import { formatDate } from '../../helper/dateHelper';
import { UpdateBaseEventItem } from './updateBaseEventItem';

interface IProps {
    networkState: NetworkState;
    image: string;
    platform: string;
    data: GunterUpdateBaseDto;
}

export const GenericUpdateEventItem: Component<IProps> = (props: IProps) => {

    return (
        <UpdateBaseEventItem
            networkState={props.networkState}
            image={props.image}
            platform={props.platform}
            numberOfSkeletonBars={2}
            children={
                <VStack>
                    <Text class="noselect" marginTop="0.5em">Version</Text>
                    <Text color="$neutral11">{props.data.version}</Text>

                    <Text class="noselect" marginTop="1em">Date</Text>
                    <Tooltip label={formatDate(props.data.dateUpdated, 'dddd D MMMM YYYY HH:mm')}>
                        <Text color="$neutral11">
                            {formatDate(props.data.dateUpdated, 'D MMM YYYY')}
                        </Text>
                    </Tooltip>
                </VStack>
            }
        />
    );
}
