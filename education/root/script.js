document.getElementById('sideLength').addEventListener('input', function() {
    const sideLength = parseFloat(this.value);
    const areaElement = document.getElementById('area');
    const differenceElement = document.getElementById('difference');
    const canvas = document.getElementById('grid');
    const ctx = canvas.getContext('2d');
    const gridSize = 5; // 5cm x 5cm grid
    const pixelPerCm = canvas.width / gridSize; // Pixels per cm in the canvas

    function roundTo16(num) {
        return Math.round(num * 1e16) / 1e16;
    }

    // 計算
    if (!isNaN(sideLength) && sideLength >= 0) {
        const area = roundTo16(sideLength * sideLength);
        const difference = Math.abs(roundTo16(area - 5));

        areaElement.textContent = area.toFixed(14);
        differenceElement.textContent = difference.toFixed(14);

        // グリッドの描画
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#ddd';
        for (let i = 0; i <= gridSize; i++) {
            ctx.beginPath();
            ctx.moveTo(i * pixelPerCm, 0);
            ctx.lineTo(i * pixelPerCm, canvas.height);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, i * pixelPerCm);
            ctx.lineTo(canvas.width, i * pixelPerCm);
            ctx.stroke();
        }

        // 黒色の正方形を描画（枠線のみ）
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        const squareSize = sideLength * pixelPerCm;
        ctx.strokeRect(0, 0, squareSize, squareSize);
    } else {
        areaElement.textContent = '';
        differenceElement.textContent = '';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

// 初期化
const canvas = document.getElementById('grid');
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext('2d');
const gridSize = 5;
const pixelPerCm = canvas.width / gridSize;
ctx.strokeStyle = '#ddd';
for (let i = 0; i <= gridSize; i++) {
    ctx.beginPath();
    ctx.moveTo(i * pixelPerCm, 0);
    ctx.lineTo(i * pixelPerCm, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * pixelPerCm);
    ctx.lineTo(canvas.width, i * pixelPerCm);
    ctx.stroke();
}
