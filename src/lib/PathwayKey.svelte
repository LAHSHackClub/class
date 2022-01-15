
<ul class="key">
  <li data-color="selected">Selected Class</li>
  <li data-color="prerequisite">Recommended Before</li>
  <li data-color="future">Recommended After</li>
  <li data-color="future-border">Available After</li>
</ul>

<style lang="scss">
  .key {
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 15px;
    font-size: 0.8rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
    }
    li::before {
      box-sizing: border-box;
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      background-color: var(--bg-secondary);
      border-radius: 5px;
      margin-right: 10px;
    }
    li[data-color="selected"]::before {
      background-color: var(--selected);
    }
    li[data-color="prerequisite"]::before {
      background-color: var(--prerequisite);
    }
    li[data-color="future"]::before {
      background-color: var(--future);
    }
    li[data-color="future-border"]::before {
      border: 3px solid var(--future);
    }
  }
</style>