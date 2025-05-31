module.exports = {
  apps: [
    {
      name: "bun-app",
      script: "~/.bun/bin/bun",
      args: "start",
      exec_mode: "fork", // no clustering
      interpreter: "none", // prevent PM2 from trying to interpret the script
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
