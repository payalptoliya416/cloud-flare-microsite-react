import loadable from "@loadable/component"

const loading = <h4>Loading...</h4>;

const Home = loadable(() => import("../views/scaffold/home"),{
    fallback: loading
})

/*const Schedule = loadable(() => import("../views/scaffold/schedule"),{
    fallback: loading
})

const Slot = loadable(() => import("../views/scaffold/slot"),{
    fallback: loading
})*/

// const End = loadable(() => import("../views/scaffolds/end"),{
//     fallback: loading
// })

// const Instruction = loadable(() => import("../views/pages/instruction"),{
//     fallback: loading
// })

// const List = loadable(() => import("../views/scaffolds/list"),{
//     fallback: loading
// })

// const Scan = loadable(() => import("../views/scaffolds/scan"),{
//     fallback: loading
// })


export default [
    {
        path : '/',
        element : Home 
    },
    /*{
         path : '/schedule',
         element : Schedule
    },
    {
         path : '/slot/:id',
         element: Slot
    },*/
];
