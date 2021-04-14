const stringifySSN = ssn => `${ssn}`

module.exports = data => {
  data.enterprise.person = data.enterprise.person.map(person => {
    if (person.sourcedid && person.sourcedid.id && typeof person.sourcedid.id !== 'string') {
      person.sourcedid.id = stringifySSN(person.sourcedid.id)
    }
    if (Array.isArray(person.userid)) {
      person.userid = person.userid.map(user => {
        if (user.useridtype === 'personNIN' && typeof user.text !== 'string') user.text = stringifySSN(user.text)
        return user
      })
    }
    return person
  })

  data.enterprise.membership = data.enterprise.membership.map(membership => {
    if (membership.sourcedid && membership.sourcedid.id && typeof membership.sourcedid.id !== 'string') {
      membership.sourcedid.id = stringifySSN(membership.sourcedid.id)
    }
    if (!Array.isArray(membership.member)) membership.member = [membership.member]
    membership.member = membership.member.map(member => {
      if (member.sourcedid && member.sourcedid.id && typeof member.sourcedid.id !== 'string') {
        member.sourcedid.id = stringifySSN(member.sourcedid.id)
      }
      return member
    })
    return membership
  })

  return data
}
