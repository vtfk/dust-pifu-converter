const fix = ssn => `00000000000${ssn}`.slice(-11)

module.exports = data => {
  data.enterprise.person = data.enterprise.person.map(person => {
    if (person.sourcedid && person.sourcedid.id) {
      person.sourcedid.id = fix(person.sourcedid.id)
    }
    if (Array.isArray(person.userid)) {
      person.userid = person.userid.map(user => {
        if (user.useridtype === 'personNIN') user.text = fix(user.text)
        return user
      })
    }
    return person
  })

  data.enterprise.membership = data.enterprise.membership.map(membership => {
    if (membership.sourcedid && membership.sourcedid.id) {
      membership.sourcedid.id = fix(membership.sourcedid.id)
    }
    
    if (!Array.isArray(membership.member)) membership.member = [membership.member]
    membership.member = membership.member.map(member => {
      if (member.sourcedid && member.sourcedid.id) {
        member.sourcedid.id = fix(member.sourcedid.id)
      }
      return member
    })
    
    return membership
  })

  return data
}
