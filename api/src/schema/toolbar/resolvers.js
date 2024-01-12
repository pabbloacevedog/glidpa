import { getAllToolbars, getToolbarById, createToolbar, updateToolbar } from '../../services/toolbarService';


export const toolbarResolver = {
    Query: {
        toolbars: async () => {
            return await getAllToolbars();
        },
        toolbar: async (parent, args) => {
            return await getToolbarById(args.toolbar_id);
        },
    },
    Mutation: {
        addToolbar: async (parent, args) => {
            return await createToolbar(args.toolbarData);
        },
        editToolbar: async (parent, args) => {
            return await updateToolbar(args.footer_id, args.toolbarData);
        },
    },
};
