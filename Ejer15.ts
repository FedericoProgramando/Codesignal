function solution(picture: string[]): string[] {
    const horizontalBorder = "*".repeat(picture[0].length + 2);
    const borderedPicture = [
      horizontalBorder,
      ...picture.map((row) => `*${row}*`),
      horizontalBorder,
    ];
    return borderedPicture;
  }