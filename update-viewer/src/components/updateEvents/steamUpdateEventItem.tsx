import { Table, Tbody, Td, Th, Thead, Tooltip, Tr } from '@hope-ui/solid';
import { Component, For } from 'solid-js';
import { NetworkState } from '../../constants/enum/networkState';
import { SteamDepot } from '../../contracts/gunterUpdateDto';
import { formatDate } from '../../helper/dateHelper';
import { UpdateBaseEventItem } from './updateBaseEventItem';

interface IProps {
    networkState: NetworkState;
    steamDepots: Array<SteamDepot>;
}

export const SteamUpdateEventItem: Component<IProps> = (props: IProps) => {

    return (
        <UpdateBaseEventItem
            networkState={props.networkState}
            image="steam.png"
            platform="Steam"
            numberOfSkeletonBars={2}
            children={
                <Table dense striped="odd" marginTop="0.5em" class="no-border-bottom">
                    <Thead>
                        <Tr>
                            <Th>BuildId</Th>
                            <Th textAlign="center">Name</Th>
                            <Th textAlign="right">Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <For each={props.steamDepots}>
                            {(steamDepot, __) =>
                                <Tr>
                                    <Td>{steamDepot.buildId}</Td>
                                    <Td textAlign="center">{steamDepot.name}</Td>
                                    <Tooltip label={formatDate(steamDepot.dateUpdated, 'dddd D MMMM YYYY HH:mm')}>
                                        <Td textAlign="right" class="noselect">
                                            {formatDate(steamDepot.dateUpdated, 'D MMM YYYY')}
                                        </Td>
                                    </Tooltip>
                                </Tr>
                            }
                        </For>
                    </Tbody>
                </Table>}
        />
    );
}
