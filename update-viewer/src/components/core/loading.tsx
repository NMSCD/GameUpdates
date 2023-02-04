import { Center, Spinner } from "@hope-ui/solid";
import { Component } from "solid-js";

export const CenterLoading: Component = () => {
    return (
        <Center mt="$4">
            <Spinner size="lg" thickness="3px" color="$primary9" />
        </Center>
    );
}