const fs = require('fs');
const path = require('path');

function createLayoutFile(targetDir) {
  const folderName = path.basename(targetDir).replace(/[\[\]\(\)]/g, '');
  const componentName = `${capitalize(folderName)}Layout`;
  const content = `
import { Stack } from 'expo-router';

export default function ${componentName}() {
  return (
    <Stack>
      <Stack.Screen name="" />
    </Stack>
  );
}
  `.trim();

  const filePath = path.join(targetDir, '_layout.tsx');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ 2. _layout.tsx 파일이 생성되었습니다:', filePath);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function main() {
  const parentFolder = process.argv[2]; // 예: app
  const newFolderName = process.argv[3]; // 예: (tabs)

  if (!parentFolder || !newFolderName) {
    console.error(
      '❌ [사용법] node create-layout.js <상위폴더> <생성할폴더명>',
    );
    process.exit(1);
  }

  // 최종 경로를 app/(tabs) 처럼 만듦
  const targetDir = path.join(parentFolder, newFolderName);

  if (fs.existsSync(targetDir)) {
    console.log('❌ 폴더가 이미 존재합니다. 작업을 종료합니다:', targetDir);
    return;
  }

  // 폴더 생성
  fs.mkdirSync(targetDir, { recursive: true });
  console.log('✅ 1. 폴더가 생성되었습니다:', targetDir);

  // _layout.tsx 생성
  createLayoutFile(targetDir);
}

main();
