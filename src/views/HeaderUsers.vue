<template>
  <div>
    <h2>Users</h2>
    <nav class="navigations">
      <router-link
        to="/"
        exact
        active-class="link--active"
        tag="div"
        class="nav"
        >Home</router-link
      >
      <router-link
        to="/item"
        exact
        active-class="link--active"
        tag="div"
        class="nav"
        >Item</router-link
      >
      <router-link
        to="/about"
        tag="div"
        exact
        active-class="link--active"
        class="nav"
        >About</router-link
      >
      <router-link
        to="/contact"
        tag="div"
        exact
        active-class="link--active"
        class="nav"
        >Contact</router-link
      >
    </nav>
  </div>
</template>
