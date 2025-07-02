import { Contacts } from "./dbConnectors";

export const resolvers = {
    Query: {
        getContacts: () => {
            return Contacts.find();
        },
        getOneContact: async (root, { id }) => {
            try {
                return await Contacts.findById(id);
            } catch (err) {
                return err;
            }
        }
    },
    Mutation: {
        createContact: async (root, { input }) => {
            const contact = new Contacts(
                {
                    firstName: input.firstName,
                    lastName: input.lastName,
                    email: input.email,
                    company: input.company
                }
            );
            contact.id = contact._id;

            try {
                await contact.save();
                return contact;
            } catch (err) {
                return err;
            }
        },
        updateContact: async (root, { input }) => {
            try {
                return await Contacts.findOneAndUpdate({ _id: input.id }, input, { new: true });
            } catch (err) {
                return err;
            }
        },
        deleteContact: async (root, { id }) => {
            try {
                await Contacts.deleteOne({ _id: id });
                return 'Successfully deleted contact';
            } catch (err) {
                return err;
            }
        }
    }
}
