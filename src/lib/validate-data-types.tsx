import commentsData from './comments.json';
import usersData from './users.json';

export function validateDataTypes() {
  console.log('\n Validating Data Types...\n');
  
  // Check comments
  const firstComment = commentsData[0];
  console.log('Comment Structure:');
  console.log('  id:', firstComment.id, '(type:', typeof firstComment.id, ')');
  console.log('  parent_id:', firstComment.parent_id, '(type:', typeof firstComment.parent_id, ')');
  console.log('  user_id:', firstComment.user_id, '(type:', typeof firstComment.user_id, ')');
  
  // Check users
  const firstUser = usersData[0];
  console.log('\nUser Structure:');
  console.log('  id:', firstUser.id, '(type:', typeof firstUser.id, ')');
  console.log('  name:', firstUser.name);
  
  // Check for matches
  const commentUserIds = commentsData.map(c => c.user_id);
  const userIds = usersData.map(u => u.id);
  
  console.log('\n Checking ID Matches:');
  const matchCount = commentUserIds.filter(cuid => userIds.includes(cuid)).length;
  console.log(`  ${matchCount} out of ${commentsData.length} comments have matching users`);
  
  if (matchCount === 0) {
    console.error(' NO MATCHES FOUND!');
    console.log('Sample comment user_id:', commentUserIds[0]);
    console.log('Sample user id:', userIds[0]);
    console.log('Are they equal?', commentUserIds[0] === userIds[0]);
  }
  
  // Find missing users
  const missingUsers = new Set<string>();
  commentsData.forEach(c => {
    if (!userIds.includes(c.user_id)) {
      missingUsers.add(c.user_id);
    }
  });
  
  if (missingUsers.size > 0) {
    console.error('\n Missing Users:');
    Array.from(missingUsers).slice(0, 5).forEach(uid => {
      console.error(`  - ${uid}`);
    });
  }
  
  console.log('\n Validation Complete\n');
}