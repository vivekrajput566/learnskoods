import { QueryClient } from "@tanstack/query-core";
import { cache } from 'react';
// import {Hydrate}

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;