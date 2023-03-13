import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts?.items;
export const filterContacts = state => state.filter?.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


    
export const getFilteredContacts = createSelector(
  [getAllContacts, filterContacts],
  (contacts, filtredContacts) =>
    contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filtredContacts)
    )
);