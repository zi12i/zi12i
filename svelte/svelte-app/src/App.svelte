<script>
	export let name;
	let a
	let b
	let symbol
</script>

<main>
	<p>이름을 입력하세요 <input bind:value={name}></p>
	<h1>{name} 하이!</h1>
	<p>계산기</p>
	<input type="number" bind:value={a}>
	<select bind:value={symbol}>
		<option value="+">+</option>
		<option value="-">-</option>
		<option value="*">*</option>
		<option value="/">/</option>
	</select>
	<input type="number" bind:value={b}>
	{#if symbol === "+"}
	<p> = {a + b}</p>
	{:else if symbol === "-"}
	<p> = {a - b}</p>
	{:else if symbol === "*"}
	<p> = {a * b}</p>
	{:else if symbol === "/"}
	<p> = {a / b}</p>
	{/if}
</main>

<style>
	/* main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>