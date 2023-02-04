import { Table, Tbody, Td, Th, Thead, Tooltip, Tr } from '@hope-ui/solid';
import { Component, For } from 'solid-js';
import { NetworkState } from '../../constants/enum/networkState';
import { GunterUpdateBaseDto } from '../../contracts/gunterUpdateDto';
import { formatDate } from '../../helper/dateHelper';
import { UpdateBaseEventItem } from './updateBaseEventItem';

interface IProps {
    networkState: NetworkState;
    datas: Array<GunterUpdateBaseDto>;
}

export const Ps4UpdateEventItem: Component<IProps> = (props: IProps) => {

    return (
        <UpdateBaseEventItem
            networkState={props.networkState}
            platform="PS4"
            numberOfSkeletonBars={2}
            children={
                <Table dense striped="odd" class="no-border-bottom">
                    <Thead>
                        <Tr>
                            <Th>Version</Th>
                            <Th textAlign="center">Region</Th>
                            <Th textAlign="right">Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <For each={props.datas}>
                            {(data, __) =>
                                <Tr>
                                    <Td>{data.version}</Td>
                                    <Td textAlign="center">{data.region?.toUpperCase()}</Td>
                                    <Tooltip label={formatDate(data.dateUpdated, 'dddd D MMMM YYYY HH:mm')}>
                                        <Td textAlign="right" class="noselect">
                                            {formatDate(data.dateUpdated, 'D MMM YYYY')}
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
