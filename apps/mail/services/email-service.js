import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/storage.service.js";

export const mailService = {
  createEmail: createEmail,
  query,
  getEmailById,
  removeEmail,
  _add,
  saveMails,
  loadMails,
};

const KEY = "emailDB";

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};

const gEmails = [
  {
    id: "e101",
    subject: "Miss you!",
    body: "Would love to catch up sometimes",
    isRead: false,
    sentAt: 1551133930594,
    isStarred: false,
    isOpen: false,
    to: "momo@momo.com",
    isTrash: false,
    from: "user@appsus.com",
  },
  {
    id: "e102",
    subject: "Verify your account",
    body: "Were almost done. Your account is created. Now you just need to verify it",
    isRead: false,
    sentAt: 1551133930594,
    isStarred: false,
    isOpen: false,
    to: "momo@momo.com",
    isTrash: false,
    from: "user@appsus.com",
  },
  {
    id: "e103",
    subject: "Hey",
    body: "This is the nigerian price, i offer you 5 milion dollars",
    isRead: false,
    sentAt: 1551133930594,
    isStarred: false,
    isOpen: false,
    to: "momo@momo.com",
    isTrash: false,
    from: "user@appsus.com",
  },
  {
    id: "e104",
    subject: "Scam",
    body: "This is a scam",
    isRead: false,
    sentAt: 1551133930594,
    isStarred: false,
    isOpen: false,
    to: "momo@momo.com",
    isTrash: false,
    from: "user@appsus.com",
  },
  {
    id: "e105",
    subject: "Not a scam?",
    body: "This is not a scam",
    isRead: false,
    sentAt: 1551133930594,
    isStarred: false,
    isOpen: false,
    to: "muki@bendavid.com",
    isTrash: false,
    from: "user@appsus.com",
  },
];

const criteria = {
  status: "inbox/sent/trash/draft",
  txt: "puki", // no need to support complex text search
  isRead: true, // (optional property, if missing: show all)
  isStared: true, // (optional property, if missing: show all)
  lables: ["important", "romantic"], // has any of the labels
};
_saveToStorage(gEmails);

function createEmail(subject, body, to, isRead = false, isStarred) {
  return {
    id: utilService.makeId(),
    subject,
    body,
    isRead,
    sentAt: new Date(),
    to,
    isStarred: false,
    isOpen: false,
    isTrash: false,
  };
}
function query(filterBy, folderFilter = 0) {
  let emails = _loadFromStorage();
  if (!emails) {
    emails = createEmail();
    _saveToStorage(emails);
  }
  const FilteredMails = _getFilteredMails(emails, filterBy);

  if (folderFilter === 0 && !filterBy) {
    let notTrash = FilteredMails.filter((mail) => mail.isTrash === false);
    return Promise.resolve(notTrash);
  }
  if (folderFilter === 1) {
    let read = FilteredMails.filter(
      (mail) => mail.isRead === true && mail.isTrash === false
    );
    return Promise.resolve(read);
  }
  if (folderFilter === 2) {
    let unread = FilteredMails.filter(
      (mail) => mail.isRead === false && mail.isTrash === false
    );
    return Promise.resolve(unread);
  }
  if (folderFilter === 3) {
    let isStar = FilteredMails.filter(
      (mail) => mail.star === true && mail.isTrash === false
    );
    return Promise.resolve(isStar);
  }
  if (folderFilter === 4) {
    let showTrash = FilteredMails.filter((mail) => mail.isTrash === true);
    return Promise.resolve(showTrash);
  }
  if (folderFilter === 5) {
    let sent = FilteredMails.filter(
      (mail) => mail.from === "user@appsus.com" && mail.isTrash === false
    );
    return Promise.resolve(sent);
  }
  return Promise.resolve(FilteredMails);
}

function getEmailById(emailId) {
  const emails = _loadFromStorage();
  const email = emails.find((email) => emailId === email.id);
  return Promise.resolve(email);
}

function removeEmail(emailId) {
  let emails = _loadFromStorage();
  emails = emails.filter((email) => email.id !== emailId);
  _saveToStorage(emails);
  return Promise.resolve();
}

function _add(subject, body, to, isRead, removeAt) {
  let emails = _loadFromStorage();
  const email = createEmail(
    subject,
    body,
    to,
    (isRead = false),
    (removeAt = null)
  );
  emails = [email, ...emails];
  _saveToStorage(emails);
  return Promise.resolve();
}

function _saveToStorage(emails) {
  storageService.saveToStorage(KEY, emails);
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY);
}
function saveMails(mails) {
  _saveToStorage(mails);
}

function loadMails() {
  return _loadFromStorage();
}
function _getFilteredMails(mails, filterBy) {
  let mailSearch = "";
  if (filterBy) mailSearch = filterBy.mailSearch;
  if (mailSearch === "") {
    return mails;
  }
}
