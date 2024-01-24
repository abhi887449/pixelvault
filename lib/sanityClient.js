import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'hesl3ahx',
    dataset: 'production',
    apiVersion: '2024-01-07',
    token:'sk3w6rvOZ0gpuynX4x36Wpoo0vQCBTuyJPU9yxRMehtrruVmdnaMCvLx1HJqgCxIOQ6xmg58SI3VJ4EctHNqkGzg5TCHjf4q3aepTF6U2GDAENMy3X1F1W9yVPUpYWqUoJZpqlelvvdukIpYQ9Fz72ZUy9y2Xf0qn54isSzx7SO2aWNCeFN8',
    useCdn: false,
    ignoreBrowserTokenWarning: true
})
